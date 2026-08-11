"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact.schema";
import { projectTypes, budgetRanges } from "@/content/contact-options";
import { getNow } from "@/lib/timestamp";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    setValue("formRenderedAt", getNow());

    const params = new URLSearchParams(window.location.search);
    const fieldMap: Record<(typeof utmKeys)[number], keyof ContactFormValues> = {
      utm_source: "utmSource",
      utm_medium: "utmMedium",
      utm_campaign: "utmCampaign",
      utm_content: "utmContent",
      utm_term: "utmTerm",
    };
    utmKeys.forEach((key) => {
      const value = params.get(key);
      if (value) setValue(fieldMap[key], value);
    });
  }, [setValue]);

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("submission_failed");

      setStatus("success");
      reset({ formRenderedAt: getNow() });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-light-gray bg-white p-8 text-center">
        <h3 className="text-xl font-semibold text-navy">Demande envoyée !</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray">
          Merci pour votre message. Un email de confirmation vous a été envoyé
          et notre équipe reviendra vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot — champ invisible pour les humains, appâtant les robots */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Ne pas remplir ce champ</label>
        <input
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>
      <input type="hidden" {...register("formRenderedAt", { valueAsNumber: true })} />
      <input type="hidden" {...register("utmSource")} />
      <input type="hidden" {...register("utmMedium")} />
      <input type="hidden" {...register("utmCampaign")} />
      <input type="hidden" {...register("utmContent")} />
      <input type="hidden" {...register("utmTerm")} />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nom et prénom" htmlFor="fullName" error={errors.fullName?.message}>
          <Input id="fullName" autoComplete="name" {...register("fullName")} />
        </Field>
        <Field label="Entreprise" htmlFor="company" optional error={errors.company?.message}>
          <Input id="company" autoComplete="organization" {...register("company")} />
        </Field>
        <Field label="Email professionnel" htmlFor="email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Téléphone" htmlFor="phone" optional error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
        <Field label="Type de projet" htmlFor="projectType" error={errors.projectType?.message}>
          <Select
            id="projectType"
            placeholder="Sélectionnez un type de projet"
            options={projectTypes}
            {...register("projectType")}
          />
        </Field>
        <Field label="Budget estimatif" htmlFor="budget" error={errors.budget?.message}>
          <Select
            id="budget"
            placeholder="Sélectionnez une fourchette"
            options={budgetRanges}
            {...register("budget")}
          />
        </Field>
      </div>

      <Field label="Délai souhaité" htmlFor="timeline" optional error={errors.timeline?.message}>
        <Input id="timeline" placeholder="Ex. sous 2 mois" {...register("timeline")} />
      </Field>

      <Field
        label="Description du projet"
        htmlFor="description"
        error={errors.description?.message}
      >
        <Textarea
          id="description"
          placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
          {...register("description")}
        />
      </Field>

      <Checkbox
        id="consent"
        label="J'accepte que mes données soient utilisées pour être recontacté(e) au sujet de mon projet, conformément à la politique de confidentialité."
        {...register("consent")}
      />
      {errors.consent && (
        <p role="alert" className="text-xs font-medium text-red-600">
          {errors.consent.message}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer.
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Envoi en cours..." : "Parler de mon projet →"}
      </Button>
    </form>
  );
}

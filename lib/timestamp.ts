/** Enveloppe Date.now() pour les hooks React (purity rule) : l'appel impur est
 * masqué derrière une fonction utilitaire, à n'utiliser que dans des effets
 * ou des gestionnaires d'événements, jamais pendant le rendu. */
export function getNow() {
  return Date.now();
}

/** Verified business content for services is not yet supplied. */
export interface Service {
  id: string;
  slug: string;
  /** Placeholder until verified content is provided. */
  title: string;
  /** Placeholder until verified content is provided. */
  description: string;
  /** Null until verified pricing is provided. */
  priceLabel: string | null;
  /** Null until portfolio/service imagery is provided. */
  imageUrl: string | null;
}

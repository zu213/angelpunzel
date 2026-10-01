// Renders a webp image with a fallback (jpg/png) for browsers that lack webp
// support. `picture { display: contents }` keeps existing img styling intact.
export default function Picture({ webp, fallback, alt = '', className, ...rest }) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={fallback || webp} alt={alt} className={className} {...rest} />
    </picture>
  );
}

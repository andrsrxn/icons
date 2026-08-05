import type { Icon } from './types'

export const IconBluetooth: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='bluetooth'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='m16.86 17.543-3.233 2.6a1 1 0 0 1-1.627-.78V4.552a1 1 0 0 1 1.61-.792l3.233 2.49a1 1 0 0 1 .04 1.552L12 11.985l4.869 4.006a1 1 0 0 1-.009 1.552Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m5.77 7.21 6.275 4.798m0 0 4.123 3.15c.948.726 1.422 1.088 1.424 1.58.002.492-.469.858-1.412 1.59l-.908.705c-1.404 1.09-2.106 1.636-2.667 1.361-.56-.274-.56-1.163-.56-2.94v-5.447Zm-6.275 4.78 6.276-4.797m0 0 4.123-3.15c.948-.726 1.422-1.088 1.424-1.58.002-.492-.469-.858-1.412-1.59l-.908-.705c-1.404-1.09-2.106-1.636-2.667-1.361-.56.274-.56 1.163-.56 2.94v5.446Z'
      />
    </svg>
  )
}

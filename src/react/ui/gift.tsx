import type { Icon } from './types'

export const IconGift: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='gift'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.22 11.04h13.56v5.23c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H9.22c-1.88 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42z'
        fill='currentColor'
      />
      <path
        d='M12 11.04H5.22v5.23c0 1.89 0 2.83.59 3.42.58.58 1.53.58 3.41.58H12m0-9.23h6.78v5.23c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H12m0-9.23v9.23m0-12.82v-1.8c0-.99-.87-1.8-1.94-1.8s-1.93.81-1.93 1.8c0 1 .86 1.8 1.93 1.8zm0-1.8c0-.99.87-1.8 1.94-1.8s1.93.81 1.93 1.8c0 1-.86 1.8-1.93 1.8H12m-6.37 3.6h12.74c.59 0 .88 0 1.1-.13a1 1 0 0 0 .4-.4C20 10.3 20 10 20 9.41s0-.9-.12-1.11a1 1 0 0 0-.4-.4c-.23-.13-.52-.13-1.11-.13H5.63c-.59 0-.88 0-1.1.13a1 1 0 0 0-.4.4C4 8.52 4 8.82 4 9.4c0 .6 0 .9.12 1.12q.15.25.4.4c.23.12.52.12 1.11.12Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}

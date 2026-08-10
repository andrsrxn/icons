import type { Icon } from './types'

export const IconHammer: Icon = ({
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
      data-slot='hammer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.67 10.6 13 12.93l-6.18 6.18c-.43.43-.64.64-.9.72a1 1 0 0 1-.54 0c-.25-.08-.46-.29-.89-.72s-.64-.64-.71-.9a1 1 0 0 1 0-.54c.07-.25.28-.46.71-.9z'
        fill='#000'
      />
      <path
        d='m10.85 10.42-6.8 6.8c-.42.42-.64.64-.71.89a1 1 0 0 0 0 .54c.07.25.29.47.71.9.43.43.65.64.9.71a1 1 0 0 0 .54 0c.25-.07.47-.28.9-.71l6.79-6.8'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='m12.59 13.34.6-.6.12-.12a1 1 0 0 1 1.3 0l.13.13.36.36c.23.23.23.6 0 .83a.6.6 0 0 0 0 .82l.65.66c.34.33.5.5.69.57q.37.15.76 0c.18-.08.35-.24.68-.57l2.02-2.02c.34-.34.5-.5.58-.69a1 1 0 0 0 0-.76 3 3 0 0 0-.58-.68l-.66-.66a.57.57 0 0 0-.8 0 .57.57 0 0 1-.82 0l-.71-.71a.6.6 0 0 1 0-.83.55.55 0 0 0 .1-.65 8 8 0 0 0-1.22-1.56 11 11 0 0 0-4.99-2.93c-.68-.18-1.03-.27-1.23.03s.06.62.57 1.27c2.45 3.09 1.38 4.52.66 5.23m1.81 2.09-1.55-1.56'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

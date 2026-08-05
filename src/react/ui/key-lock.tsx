import type { Icon } from './types'

export const IconKeyLock: Icon = ({
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
      data-slot='key-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 20.276a8.276 8.276 0 1 0 0-16.552 8.276 8.276 0 0 0 0 16.552Zm-1.15-7.74-.675 2.115-.124.386c-.275.844-.425 1.304-.183 1.634.275.376.85.376 1.999.376h.331c1.144 0 1.716 0 1.992-.374.22-.3.083-.71-.155-1.42a25.16 25.16 0 0 1-.194-.593l-.687-2.122c-.15-.464.106-.954.472-1.277a2.46 2.46 0 1 0-3.25.002c.366.321.622.81.474 1.273Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.276 12a8.276 8.276 0 1 1-16.552 0 8.276 8.276 0 0 1 16.552 0Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M10.32 11.212c.387.362.668.892.508 1.396l-.653 2.043c-.348 1.095-.583 1.643-.307 2.02.275.376.85.376 1.999.376h.331c1.144 0 1.716 0 1.992-.374.276-.375-.008-.921-.349-2.013l-.664-2.05c-.163-.505.118-1.037.505-1.4a2.461 2.461 0 1 0-3.362.003Z'
      />
    </svg>
  )
}

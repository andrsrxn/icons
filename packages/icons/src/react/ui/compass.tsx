import type { Icon } from './types'

export const IconCompass: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-compass'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 21.43a9.43 9.43 0 1 1 0-18.86 9.43 9.43 0 0 1 0 18.86m2.06-13.8-2.44.5c-1.15.24-1.73.36-2.14.74s-.57.95-.9 2.08l-.76 2.68c-.43 1.5-.64 2.24-.24 2.66s1.16.22 2.67-.18l2.68-.7c1.13-.3 1.69-.44 2.08-.83.38-.4.52-.96.8-2.09l.59-2.42c.34-1.38.5-2.07.13-2.47-.39-.4-1.08-.25-2.47.04'
        fill='currentColor'
      />
      <path
        d='M2.57 12A9.4 9.4 0 0 0 12 21.43 9.43 9.43 0 1 0 2.57 12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m11.54 8.04 2.67-.55c1.4-.29 2.09-.43 2.47-.04.38.4.21 1.1-.13 2.47l-.65 2.66h0c-.27 1.13-.41 1.69-.8 2.08-.38.4-.95.54-2.07.83l-2.94.77c-1.5.4-2.26.6-2.66.18s-.2-1.17.23-2.66l.84-2.93c.32-1.13.49-1.7.9-2.08.4-.38.98-.5 2.14-.73'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.67 12a.67.67 0 1 1-1.34 0 .67.67 0 0 1 1.34 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

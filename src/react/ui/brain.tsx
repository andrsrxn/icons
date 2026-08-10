import type { Icon } from './types'

export const IconBrain: Icon = ({
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
      data-slot='brain'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m10.61 4.68.38.22A2 2 0 0 1 12 6.63v10.82a2 2 0 0 1-.89 1.66l-.38.26a2 2 0 0 1-2.48-.2l-.94-.88a2 2 0 0 0-.72-.43l-.39-.13a2 2 0 0 1-1.34-1.67L4.7 14.7a2 2 0 0 0-.25-.76L3.92 13a2 2 0 0 1 .01-1.98l.53-.92a2 2 0 0 0 .25-.75l.16-1.28a2 2 0 0 1 1.09-1.54l.83-.42a2 2 0 0 0 .39-.25l1.17-.97a2 2 0 0 1 2.26-.2'
        fill='currentColor'
      />
      <path
        d='M12 6.48a2.4 2.4 0 0 0-2.37-2.45 2.4 2.4 0 0 0-2.37 2.45c0 .57.2 1.1.51 1.52m-.51 5c0-1.1.87-2 1.94-2m7.54 2c0-1.1-.87-2-1.94-2M12 17.52a2.4 2.4 0 0 1-2.37 2.45 2.4 2.4 0 0 1-2.37-2.45c0-.57.2-1.1.51-1.52'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M12 6.48a2.4 2.4 0 0 1 2.37-2.45 2.4 2.4 0 0 1 2.37 2.45c0 .57-.2 1.1-.51 1.52M12 17.52a2.4 2.4 0 0 0 2.37 2.45 2.4 2.4 0 0 0 2.37-2.45c0-.57-.2-1.1-.51-1.52'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M6.85 6.19a2.3 2.3 0 0 0-2.26 2.33q0 .63.3 1.15a2.3 2.3 0 0 0-1.42 2.17c0 1.04.67 1.93 1.59 2.22q-.46.61-.47 1.42a2.3 2.3 0 0 0 2.26 2.33m10.3-11.62a2.3 2.3 0 0 1 2.26 2.33q0 .63-.3 1.15a2.3 2.3 0 0 1 1.42 2.17c0 1.04-.67 1.93-1.59 2.22q.46.61.47 1.42a2.3 2.3 0 0 1-2.26 2.33'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M12 17.81V6.19' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}

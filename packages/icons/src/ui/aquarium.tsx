import type { Icon } from './types'

export const IconAquarium: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-aquarium'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m21.95 3.63-4.56-1.57L12 3.63 6.95 2.06l-4.9 1.57v18.1l4.48-1.34L12 21.72l5.39-1.33 4.56 1.33zM11.47 17.37c.79-.27 2.52-1.07 3.13-2.06l2.79-1.12 1.71-2.07-1.71-2.41-2.8-.9c-.73-.72-2.34-2.16-2.87-2.16L11 8.81l-3.05 1.33L5.5 8.81v6.5l1.88-1.38 3.63 1.38z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M14.51 15.44c2.71-.56 3.96-1.83 4.49-2.59.14-.2.2-.3.2-.6a1 1 0 0 0-.2-.62c-.53-.78-1.8-2.08-4.49-2.59'
        stroke='currentColor'
      />
      <path
        d='M11.05 9.13a6 6 0 0 0-2.8 1l-.16.1a1 1 0 0 1-1.2-.2q-.68-.63-.76-.68c-.51-.3-1.06.03-1.05.62q0 .1.24 1.09h0q.16.69.18 1.21c0 .45-.1 1.01-.25 1.6h0l-.16.62c-.15.7.57 1.15 1.13.69l.42-.39h0l.22-.2c.45-.39.59-.4 1.12-.14l.5.27h0c.54.3 1.37.6 2.57.7'
        stroke='currentColor'
      />
      <path
        d='M14.51 9.04a3.6 3.6 0 0 0-2.2-1.88c-.46-.16-.7-.23-.9-.09s-.21.48-.22 1.13q0 .46-.12.9'
        stroke='currentColor'
      />
      <path
        d='M14.47 15.5a3.5 3.5 0 0 1-2.16 1.83c-.46.15-.7.23-.9.08-.2-.14-.2-.47-.22-1.13q0-.43-.12-.84'
        stroke='currentColor'
      />
      <path d='M12.43 11.19c-.22.25-.36.64-.36 1.08s.14.84.36 1.09' stroke='currentColor' />
      <path
        d='M15.53 11.91a.39.39 0 1 1-.78 0 .39.39 0 0 1 .78 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M2.32 21.9c1.7-1.09 2.89-1.66 4.84-1.45 1.95.22 2.88 1.46 4.84 1.46s2.68-1.24 4.84-1.46c1.95-.2 3.15.36 4.84 1.46'
        stroke='currentColor'
      />
      <path
        d='M2.43 3.63c1.7-1.1 2.9-1.67 4.84-1.45 1.96.22 2.89 1.45 4.84 1.45 1.96 0 2.68-1.23 4.85-1.45 1.94-.2 3.14.36 4.84 1.45'
        stroke='currentColor'
      />
    </svg>
  )
}

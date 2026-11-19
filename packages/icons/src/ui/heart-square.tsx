import type { Icon } from './types'

export const IconHeartSquare: Icon = ({
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
      data-slot='icon-ui-heart-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.6 8.59c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.87c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.87c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.6c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12zm9.4.62a3.8 3.8 0 0 1 3-1.72c1.91 0 3.35 2.18 2.73 4.49-.4 1.5-2.1 2.83-3.64 4.02l-.4.31c-.9.7-1.34 1.06-1.69 1.06s-.8-.35-1.7-1.06l-.39-.3c-1.54-1.2-3.24-2.53-3.64-4.03-.62-2.3.82-4.5 2.73-4.5a3.8 3.8 0 0 1 3 1.73'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M13.15 8.1c.5-.34 1.14-.61 1.88-.61 1.92 0 3.35 2.18 2.74 4.49-.44 1.63-2.41 3.06-4.04 4.33h0c-.9.7-1.35 1.06-1.7 1.06s-.79-.35-1.69-1.06c-1.63-1.27-3.6-2.7-4.04-4.33-.61-2.3.82-4.5 2.74-4.5.74 0 1.37.28 1.88.62.64.43.96.65 1.12.65.15 0 .47-.22 1.11-.65'
        stroke='currentColor'
      />
      <path
        d='M14.47 21.46H9.6c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97V9.59c0-3.3 0-4.95 1.03-5.98C4.65 2.6 6.3 2.6 9.6 2.6h4.87c3.3 0 4.95 0 5.97 1.02 1.03 1.03 1.03 2.68 1.03 5.98v4.87c0 3.3 0 4.95-1.03 5.97-1.02 1.03-2.67 1.03-5.97 1.03'
        stroke='currentColor'
      />
    </svg>
  )
}

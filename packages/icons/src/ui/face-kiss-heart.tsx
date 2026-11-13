import type { Icon } from './types'

export const IconFaceKissHeart: Icon = ({
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
      data-slot='icon-ui-face-kiss-heart'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 12a10.26 10.26 0 0 0 16.94 7.79l-2.63-2.51.25-2.17 1.4-.64 1.31.97 1.65-.97 1.17.46A10.26 10.26 0 1 0 1.74 12'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M22.26 12a10.26 10.26 0 1 0-6.13 9.4' stroke='currentColor' />
      <path d='M10.74 10.33a1.95 1.95 0 1 0-3.9 0' stroke='currentColor' />
      <path d='M17.16 10.33a1.95 1.95 0 1 0-3.9 0' stroke='currentColor' />
      <path
        d='M19.26 15.48c.2-.32.82-.97 1.69-.97 1.07 0 1.88 1.23 1.54 2.53-.35 1.3-2.41 2.36-3.23 3.29-.82-.93-2.88-2-3.23-3.29-.35-1.3.46-2.53 1.54-2.53.86 0 1.49.65 1.69.97'
        stroke='currentColor'
      />
      <path
        d='M11.57 16.28c.6 0 1.95 0 1.95-1.26s-1.39-1.26-1.95-1.26h-.86'
        stroke='currentColor'
      />
      <path
        d='M11.57 16.28c.47 0 1.95 0 1.95 1.25 0 1.26-1.2 1.26-1.95 1.26h-.88'
        stroke='currentColor'
      />
    </svg>
  )
}

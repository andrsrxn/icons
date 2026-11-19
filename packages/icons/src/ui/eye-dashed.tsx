import type { Icon } from './types'

export const IconEyeDashed: Icon = ({
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
      data-slot='icon-ui-eye-dashed'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 5.15c-5.77 0-9.14 4.14-10.35 5.97a1.6 1.6 0 0 0-.01 1.72c1.2 1.84 4.55 6.01 10.37 6.01s9.16-4.17 10.36-6.01c.34-.53.34-1.2 0-1.72-1.22-1.83-4.6-5.97-10.36-5.97m0 10.25c1.69 0 3.38-1.84 3.38-3.42 0-1.6-1.67-3.22-3.36-3.22-1.68 0-3.56 1.63-3.56 3.22 0 1.58 1.86 3.42 3.55 3.42'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M6.9 17.65a13 13 0 0 1-2.66-1.8' stroke='currentColor' />
      <path d='M10.08 18.7a12 12 0 0 0 3.84 0' stroke='currentColor' />
      <path d='M19.76 15.85c-.75.65-1.63 1.29-2.66 1.8' stroke='currentColor' />
      <path d='M21.77 10.3c.51.67.77 1 .77 1.68s-.25 1-.75 1.67' stroke='currentColor' />
      <path d='M17.1 6.35a13 13 0 0 1 2.66 1.8' stroke='currentColor' />
      <path d='M10.08 5.3a12 12 0 0 1 3.84 0' stroke='currentColor' />
      <path d='M4.24 8.15a13 13 0 0 1 2.66-1.8' stroke='currentColor' />
      <path d='M2.23 10.3c-.51.67-.77 1-.77 1.68s.25 1 .75 1.67' stroke='currentColor' />
      <circle cx='12.02' cy='11.97' r='3.59' stroke='currentColor' />
    </svg>
  )
}

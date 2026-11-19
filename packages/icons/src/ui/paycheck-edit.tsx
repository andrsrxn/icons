import type { Icon } from './types'

export const IconPaycheckEdit: Icon = ({
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
      data-slot='icon-ui-paycheck-edit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m20.14 12.02 2.15 1.45v-4.9c0-.5 0-.76-.02-.97a3.5 3.5 0 0 0-3.05-3.05c-.21-.03-.47-.03-.97-.03H8.71c-3.3 0-4.95 0-5.98 1.03-1.02 1.02-1.02 2.67-1.02 5.97v.96c0 3.3 0 4.95 1.02 5.97 1.03 1.03 2.68 1.03 5.98 1.03h4.6l.58-1.5z'
        fill='currentColor'
      />
      <path
        d='M9.56 19.48h-.8c-3.3 0-4.95 0-5.98-1.03-1.02-1.02-1.02-2.67-1.02-5.97v-.96c0-3.3 0-4.95 1.02-5.97 1.03-1.03 2.68-1.03 5.98-1.03h8.66c1.23 0 1.85 0 2.35.16A3.5 3.5 0 0 1 22.09 7c.15.5.15 1.12.15 2.35'
        stroke='currentColor'
      />
      <path
        d='M9.5 10.05c-.18-.58-1.05-1.02-2.08-1.02-1.02 0-2.15.38-2.15 1.55 0 2.51 4.24.58 4.24 2.91 0 1.07-1.04 1.48-2.09 1.48s-1.8-.45-2.15-1.04'
        stroke='currentColor'
      />
      <path d='M7.38 15.88v-.8' stroke='currentColor' />
      <path d='M7.38 8.9v-.78' stroke='currentColor' />
      <path d='M13.21 9.98h4.7' stroke='currentColor' />
      <path d='M13.21 14.02h1' stroke='currentColor' />
      <path d='m20.65 16.13-2.1-2.09' stroke='currentColor' />
      <path
        d='m13.28 20.03.04-.3c.1-.65.14-.97.28-1.26s.38-.53.85-1l4.5-4.47c.54-.54.8-.8 1.13-.85a1 1 0 0 1 .3 0c.32.05.59.32 1.13.85.54.55.81.82.86 1.15a1 1 0 0 1 0 .3c-.05.32-.33.6-.88 1.13l-4.52 4.43c-.47.46-.7.69-1 .83a4 4 0 0 1-1.25.28l-.32.04c-.6.08-.9.12-1.08-.05-.17-.18-.13-.48-.04-1.08'
        stroke='currentColor'
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconCreativeCommonsNc: Icon = ({
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
      data-slot='icon-ui-creative-commons-nc'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.72 12a10.28 10.28 0 1 0 20.56 0 10.28 10.28 0 0 0-20.56 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.72 12a10.28 10.28 0 1 1 20.56 0 10.28 10.28 0 0 1-20.56 0'
        stroke='currentColor'
      />
      <path
        d='M8.05 16.03c.62 1.14 2.03 2.01 3.97 2.01 1.53 0 3.23-.7 3.79-2.02'
        stroke='currentColor'
      />
      <path d='M8.22 8.52q-.16.45-.17 1.01c0 2.26 1.98 2.46 3.97 2.7' stroke='currentColor' />
      <path d='M12.02 6.53v-1.4' stroke='currentColor' />
      <path d='M12.02 19.45v-1.4' stroke='currentColor' />
      <path d='m4.83 4.83 14.34 14.34' stroke='currentColor' />
      <path d='M15.87 8.52c-.35-1.12-1.96-1.99-3.85-1.99q-1.07-.01-2.03.34' stroke='currentColor' />
    </svg>
  )
}

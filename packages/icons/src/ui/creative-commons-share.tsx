import type { Icon } from './types'

export const IconCreativeCommonsShare: Icon = ({
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
      data-slot='icon-ui-creative-commons-share'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.28a10.28 10.28 0 1 1 0-20.56 10.28 10.28 0 0 1 0 20.56m4.72-4.25V8.58h-3.17V6.1H7.76v9.11h3.27v2.82z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.72 12a10.28 10.28 0 1 1 20.56 0 10.28 10.28 0 0 1-20.56 0'
        stroke='currentColor'
      />
      <path
        d='M10.91 16.07V10.5c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h1.82c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v5.57c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-1.82c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7'
        stroke='currentColor'
      />
      <path
        d='M13.51 8.39v-.46c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3H9.69c-.94 0-1.4 0-1.7.3-.3.29-.3.76-.3 1.7v5.57c0 .94 0 1.41.3 1.7s.76.3 1.7.3h.91'
        stroke='currentColor'
      />
    </svg>
  )
}

import type { Icon } from './types'

export const IconRemoteController: Icon = ({
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
      data-slot='icon-ui-remote-controller'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 1.73c3.04 0 4.56 0 5.62.79a4 4 0 0 1 .84.83c.78 1.06.78 2.59.78 5.63v6.04c0 3.04 0 4.57-.78 5.63a4 4 0 0 1-.84.83c-1.06.79-2.58.79-5.62.79s-4.56 0-5.62-.79a4 4 0 0 1-.84-.83c-.78-1.06-.78-2.59-.78-5.63V8.98c0-3.04 0-4.57.78-5.63a4 4 0 0 1 .84-.83c1.06-.79 2.58-.79 5.62-.79m3.22 14.75a3.22 3.22 0 1 1-6.44 0 3.22 3.22 0 0 1 6.44 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M4.76 15.02V8.98c0-3.04 0-4.57.78-5.63a4 4 0 0 1 .84-.83c1.06-.79 2.58-.79 5.62-.79v0c3.04 0 4.56 0 5.62.79a4 4 0 0 1 .84.83c.78 1.06.78 2.59.78 5.63v6.04c0 3.04 0 4.57-.78 5.63a4 4 0 0 1-.84.83c-1.06.79-2.58.79-5.62.79v0c-3.04 0-4.56 0-5.62-.79a4 4 0 0 1-.84-.83c-.78-1.06-.78-2.59-.78-5.63'
        stroke='currentColor'
      />
      <circle cx='12' cy='16.48' r='3.22' stroke='currentColor' />
      <path
        d='M10.24 5.77a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.12 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.24 9.71a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.12 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.88 5.77a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.12 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.88 9.71a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.12 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}

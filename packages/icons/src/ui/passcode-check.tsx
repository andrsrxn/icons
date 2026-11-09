import type { Icon } from './types'

export const IconPasscodeCheck: Icon = ({
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
      data-slot='icon-ui-passcode-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m15.82 17.56.62.79c.73.9 1.1 1.36 1.57 1.36.49 0 .85-.46 1.57-1.37l3.07-3.89'
        stroke='currentColor'
      />
      <path
        d='M17.95 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.3 5.46c3.78 0 5.66 0 6.83 1.18 1.18 1.17 1.18 3.05 1.18 6.82v1.7l-4.08 4.6-2.1-1.22h-7.9c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45s0-3.55.49-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M11.62 18.54H8.23c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45s0-3.55.49-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49h10.12a4 4 0 0 1 3.96 4.06'
        stroke='currentColor'
      />
      <path
        d='M7.29 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.62 12a.66.66 0 1 1-1.32 0 .66.66 0 0 1 1.32 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}

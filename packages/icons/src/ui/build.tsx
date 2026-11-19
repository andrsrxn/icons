import type { Icon } from './types'

export const IconBuild: Icon = ({
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
      data-slot='icon-ui-build'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.73 18.08c0-.97 0-1.45.16-1.83a2 2 0 0 1 1.04-1.04c.38-.17.87-.17 1.84-.17h9.48c.97 0 1.46 0 1.84.17a2 2 0 0 1 1.03 1.04c.17.38.17.86.17 1.83s0 1.46-.17 1.84a2 2 0 0 1-1.03 1.04c-.38.17-.87.17-1.84.17H4.77c-.97 0-1.46 0-1.84-.17a2 2 0 0 1-1.04-1.04c-.16-.38-.16-.86-.16-1.84'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M1.73 5.92c0-.98 0-1.46.16-1.84a2 2 0 0 1 1.04-1.04c.38-.17.87-.17 1.84-.17h9.48c.97 0 1.46 0 1.84.17a2 2 0 0 1 1.03 1.04c.17.38.17.86.17 1.84 0 .97 0 1.45-.17 1.83A2 2 0 0 1 16.1 8.8c-.38.17-.87.17-1.84.17H4.77c-.97 0-1.46 0-1.84-.17a2 2 0 0 1-1.04-1.04c-.16-.38-.16-.86-.16-1.83'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M6.68 12c0-.97 0-1.46.17-1.84a2 2 0 0 1 1.04-1.04c.38-.16.87-.16 1.84-.16h9.5c.97 0 1.46 0 1.84.16a2 2 0 0 1 1.04 1.04c.16.38.16.87.16 1.84s0 1.46-.16 1.84a2 2 0 0 1-1.04 1.04c-.38.16-.87.16-1.84.16h-9.5c-.97 0-1.46 0-1.84-.16a2 2 0 0 1-1.04-1.04c-.17-.38-.17-.87-.17-1.84'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M14.25 21.13H4.77c-.97 0-1.46 0-1.84-.17a2 2 0 0 1-1.04-1.04c-.16-.38-.16-.86-.16-1.84v0c0-.97 0-1.45.16-1.83a2 2 0 0 1 1.04-1.04c.38-.17.87-.17 1.84-.17h9.48c.97 0 1.46 0 1.84.17a2 2 0 0 1 1.03 1.04c.17.38.17.86.17 1.83v0c0 .98 0 1.46-.17 1.84a2 2 0 0 1-1.03 1.04c-.38.17-.87.17-1.84.17'
        stroke='currentColor'
      />
      <path
        d='M14.25 8.96H4.77c-.97 0-1.46 0-1.84-.17a2 2 0 0 1-1.04-1.04c-.16-.38-.16-.86-.16-1.83v0c0-.98 0-1.46.16-1.84a2 2 0 0 1 1.04-1.04c.38-.17.87-.17 1.84-.17h9.48c.97 0 1.46 0 1.84.17a2 2 0 0 1 1.03 1.04c.17.38.17.86.17 1.84v0c0 .97 0 1.45-.17 1.83A2 2 0 0 1 16.1 8.8c-.38.17-.87.17-1.84.17'
        stroke='currentColor'
      />
      <path
        d='M19.23 15.04h-9.5c-.97 0-1.46 0-1.84-.16a2 2 0 0 1-1.04-1.04c-.17-.38-.17-.87-.17-1.84v0c0-.97 0-1.46.17-1.84a2 2 0 0 1 1.04-1.04c.38-.16.87-.16 1.84-.16h9.5c.97 0 1.46 0 1.84.16a2 2 0 0 1 1.04 1.04c.16.38.16.87.16 1.84v0c0 .97 0 1.46-.16 1.84a2 2 0 0 1-1.04 1.04c-.38.16-.87.16-1.84.16'
        stroke='currentColor'
      />
    </svg>
  )
}

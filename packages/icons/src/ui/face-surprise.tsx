import type { Icon } from './types'

export const IconFaceSurprise: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-face-surprise'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.74 12a10.26 10.26 0 1 0 20.52 0 10.26 10.26 0 0 0-20.52 0M12 14a2.01 2.01 0 1 0 0 4.03 2.01 2.01 0 0 0 0-4.02'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.26' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M9.59 9.53a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16 9.53a.8.8 0 1 1-1.59 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.15 16.02a2.6 2.6 0 0 0-.61-1.7c-.4-.46-.94-.74-1.54-.74-1.19 0-2.15 1.1-2.15 2.44 0 1.35.96 2.44 2.15 2.44s2.15-1.1 2.15-2.44'
        stroke='currentColor'
      />
    </svg>
  )
}

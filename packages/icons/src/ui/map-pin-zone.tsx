import type { Icon } from './types'

export const IconMapPinZone: Icon = ({
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
      data-slot='icon-ui-map-pin-zone'
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
        d='M6.26 7.55c0 3.17 3.76 10.35 5.74 10.35s5.74-7.18 5.74-10.35a5.74 5.74 0 0 0-11.48 0M12 9.85a2.7 2.7 0 1 1 0-5.39 2.7 2.7 0 0 1 0 5.4'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M21.06 22.2H3.4l-.63-2.54 3.06-3.34h3.33L12.14 18l2.83-1.8h3.12l2.97 3.45z'
        fill='currentColor'
      />
      <path
        d='m5.6 16.66-.5.59c-1.85 2.14-2.77 3.2-2.37 4.08s1.81.88 4.64.88h9.27c2.83 0 4.24 0 4.64-.88.4-.87-.52-1.94-2.36-4.08l-.51-.59'
        stroke='currentColor'
      />
      <path
        d='M14.5 15.83c-1 1.31-1.51 1.97-2.5 1.97-.98 0-1.49-.66-2.5-1.98-1.62-2.12-3.45-5.15-3.45-8.07a5.95 5.95 0 1 1 11.9 0c0 2.94-1.82 5.96-3.45 8.08'
        stroke='currentColor'
      />
      <circle cx='12' cy='7.51' r='2.82' transform='rotate(90 12 7.51)' stroke='currentColor' />
    </svg>
  )
}

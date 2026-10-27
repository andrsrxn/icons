import type { Icon } from './types'

export const IconKeyframeAlignHorizontally: Icon = ({
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
      data-slot='icon-ui-keyframe-align-horizontally'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.86 8.95c1-1.03 1.51-1.54 2.14-1.54s1.13.51 2.14 1.54l.45.46.46.45c1.03 1 1.54 1.51 1.54 2.14s-.51 1.13-1.54 2.14l-.46.45-.45.46c-1 1.03-1.51 1.54-2.14 1.54s-1.13-.51-2.14-1.54l-.45-.46-.46-.45c-1.03-1-1.54-1.51-1.54-2.14s.51-1.13 1.54-2.14l.46-.45z'
        fill='currentColor'
      />
      <path
        d='m14.65 9.35-.5-.51C13.12 7.8 12.62 7.29 12 7.29s-1.13.52-2.14 1.55l-.5.51-.52.5C7.8 10.88 7.29 11.38 7.29 12s.52 1.13 1.55 2.14l.51.5.5.52c1.02 1.03 1.52 1.55 2.15 1.55s1.13-.52 2.14-1.55l.5-.51.52-.5c1.03-1.02 1.55-1.52 1.55-2.15s-.52-1.13-1.55-2.14z'
        stroke='currentColor'
      />
      <path d='M19.88 12h2.46' stroke='currentColor' />
      <path d='M1.68 12h2.46' stroke='currentColor' />
    </svg>
  )
}

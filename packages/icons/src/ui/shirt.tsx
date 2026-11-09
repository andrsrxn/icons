import type { Icon } from './types'

export const IconShirt: Icon = ({
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
      data-slot='icon-ui-shirt'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.38 5.6c-1.65 0-2.3-1.1-2.54-1.94-.16-.53-.6-.99-1.16-.99H7.04a1 1 0 0 0-.79.39L1.91 8.64a1 1 0 0 0 .38 1.53l4.16 1.86q.28.15.3.46v4.64a4 4 0 0 0 3.98 4l2.46.01a4 4 0 0 0 4.01-4v-4.32a1 1 0 0 1 .6-.92l3.98-1.77a1 1 0 0 0 .43-1.46l-3.57-5.53a1 1 0 0 0-.86-.45l-1.72.04c-.54 0-.98.46-1.14.98-.25.83-.89 1.9-2.54 1.9'
        fill='currentColor'
      />
      <path
        d='M6.75 9.65c0 1.19 0 1.78-.31 2.07a1 1 0 0 1-.4.23c-.41.13-.93-.17-1.95-.75l-.83-.48c-.92-.53-1.38-.79-1.47-1.23-.1-.45.23-.87.87-1.72l2.95-3.86c.34-.44.5-.66.71-.82a2 2 0 0 1 .7-.35c.26-.07.54-.07 1.09-.07.49 0 .73 0 .89.05.21.08.24.1.4.26a7 7 0 0 1 .64 1.21 2.4 2.4 0 0 0 2.34 1.41c1.35 0 2.02-.7 2.36-1.41h0c.33-.69.5-1.03.59-1.13.16-.19.2-.21.43-.29.14-.04.37-.05.81-.06.6 0 .89-.02 1.16.05a2 2 0 0 1 .86.48c.2.19.36.44.66.95h0l2.22 3.67c.5.81.74 1.22.64 1.62s-.52.65-1.33 1.13l-.93.55c-1 .6-1.5.89-1.9.78a1 1 0 0 1-.45-.26c-.3-.29-.3-.87-.3-2.03'
        stroke='currentColor'
      />
      <path
        d='M17.2 9.93v6.1c0 2.09 0 3.13-.5 3.88a3 3 0 0 1-.85.85c-.75.5-1.8.5-3.88.5s-3.13 0-3.88-.5a3 3 0 0 1-.85-.85c-.5-.75-.5-1.8-.5-3.88v-6.1'
        stroke='currentColor'
      />
    </svg>
  )
}

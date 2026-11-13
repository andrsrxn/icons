import type { Icon } from './types'

export const IconRemoteControllerSignal: Icon = ({
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
      data-slot='icon-ui-remote-controller-signal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.58 22.72v-7.07c0-2.4 0-3.61-.5-4.52a4 4 0 0 0-1.56-1.55c-.9-.5-2.1-.5-4.52-.5s-3.62 0-4.52.5a4 4 0 0 0-1.56 1.55c-.5.9-.5 2.11-.5 4.52v7.07h3.67l-.01-.25a2.92 2.92 0 1 1 5.83.25z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M18.58 22.47v-6.82c0-2.4 0-3.61-.5-4.52a4 4 0 0 0-1.56-1.55c-.9-.5-2.1-.5-4.52-.5s-3.62 0-4.52.5a4 4 0 0 0-1.56 1.55c-.5.9-.5 2.11-.5 4.52v6.82'
        stroke='currentColor'
      />
      <path d='M9.08 22.47a2.92 2.92 0 0 1 5.84 0' stroke='currentColor' />
      <path
        d='M10.4 12.74a.5.5 0 1 1-1.01 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.4 16.32a.5.5 0 1 1-1.01 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.61 12.74a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.61 16.32a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M8.65 6.37a6 6 0 0 1 3.65-1.29c1.62 0 2.75.57 3.65 1.29' stroke='currentColor' />
      <path d='M5.57 3.99A10.6 10.6 0 0 1 12 1.72c2.86 0 4.85 1 6.43 2.27' stroke='currentColor' />
    </svg>
  )
}

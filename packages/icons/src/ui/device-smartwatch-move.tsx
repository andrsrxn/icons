import type { Icon } from './types'

export const IconDeviceSmartwatchMove: Icon = ({
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
      data-slot='icon-ui-device-smartwatch-move'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M8.99 5.29a1.76 1.76 0 1 1 0-3.52H15a1.76 1.76 0 1 1 0 3.52z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M8.99 22.2a1.76 1.76 0 1 1 0-3.52H15a1.76 1.76 0 1 1 0 3.52z'
        fill='currentColor'
      />
      <path
        d='M19.17 12c0-2.54 0-3.8-.55-4.74a4 4 0 0 0-1.42-1.42c-.94-.55-2.2-.55-4.74-.55h-.92c-2.54 0-3.8 0-4.74.55a4 4 0 0 0-1.42 1.42c-.55.94-.55 2.2-.55 4.74v0c0 2.54 0 3.8.55 4.74a4 4 0 0 0 1.42 1.42c.94.55 2.2.55 4.74.55h.92c2.54 0 3.8 0 4.74-.55a4 4 0 0 0 1.42-1.42c.55-.94.55-2.2.55-4.74'
        stroke='currentColor'
      />
      <path
        d='M16.77 5.29c0-1.42 0-2.13-.34-2.64a2 2 0 0 0-.53-.53c-.51-.35-1.22-.35-2.65-.35h-2.5c-1.43 0-2.14 0-2.65.35a2 2 0 0 0-.53.53c-.34.5-.34 1.22-.34 2.64'
        stroke='currentColor'
      />
      <path
        d='M16.77 18.68c0 1.42 0 2.13-.34 2.64a2 2 0 0 1-.53.53c-.51.35-1.22.35-2.65.35h-2.5c-1.43 0-2.14 0-2.65-.35a2 2 0 0 1-.53-.53c-.34-.51-.34-1.22-.34-2.64'
        stroke='currentColor'
      />
      <path
        d='m12.75 14.62.5-.5c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12l-.5-.5'
        stroke='currentColor'
      />
      <path d='M8.91 12h5.48' stroke='currentColor' />
    </svg>
  )
}

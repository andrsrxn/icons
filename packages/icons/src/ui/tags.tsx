import type { Icon } from './types'

export const IconTags: Icon = ({
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
      data-slot='icon-ui-tags'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m13.82 14.85 2.97-2.97c.4-.41.61-.61.77-.84a3 3 0 0 0 .47-1.15c.05-.27.05-.56.05-1.13V6.43a2.09 2.09 0 1 1 4.17 0v3c0 .86 0 1.28-.1 1.68a3 3 0 0 1-.28.66c-.2.36-.5.66-1.1 1.26l-7.84 7.84a1.9 1.9 0 1 1-2.64-2.73z'
        fill='currentColor'
      />
      <path
        d='M4.05 17.48c-1.38-1.38-2.07-2.07-2.27-2.89a3 3 0 0 1 0-1.41c.2-.82.89-1.51 2.27-2.9L9.64 4.7c.6-.6.9-.9 1.26-1.1a3 3 0 0 1 .66-.28c.4-.11.82-.11 1.68-.11 1.95 0 2.93 0 3.64.44a3 3 0 0 1 1 1c.44.72.44 1.7.44 3.65 0 .85 0 1.28-.1 1.67a3 3 0 0 1-.28.66c-.2.36-.5.66-1.1 1.27l-5.6 5.58c-1.37 1.38-2.06 2.07-2.88 2.27a3 3 0 0 1-1.42 0c-.82-.2-1.5-.89-2.89-2.27'
        stroke='currentColor'
      />
      <path
        d='M8.94 19.58c.48.48.72.72.96.88a3 3 0 0 0 3.36 0c.23-.16.47-.4.95-.88l6.55-6.55c.6-.6.9-.9 1.1-1.26a3 3 0 0 0 .28-.66c.11-.4.11-.82.11-1.67V8.8c0-1.35 0-2.03-.21-2.56a3 3 0 0 0-1.68-1.68c-.53-.21-1.2-.21-2.55-.21'
        stroke='currentColor'
      />
      <path
        d='M14.13 7.4a.77.77 0 1 1-1.1 1.1.77.77 0 0 1 1.1-1.1'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M7.47 16.63 4.9 14.06' stroke='currentColor' />
    </svg>
  )
}

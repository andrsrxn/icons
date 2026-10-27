import type { Icon } from './types'

export const IconLogicNor: Icon = ({
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
      data-slot='icon-ui-logic-nor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.16 19.08h.06a6 6 0 0 0 5.97-5.97v-2.22a6 6 0 0 0-5.97-5.97h-.07c-.98 0-1.7.93-1.45 1.88v.02l1.2 4.4c.1.39.16.58.16.78s-.06.4-.16.78l-1.2 4.4v.02a1.5 1.5 0 0 0 1.45 1.88z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M18.9 12h3.43' stroke='currentColor' />
      <path d='M1.67 8.46h5.7' stroke='currentColor' />
      <path d='M1.67 15.54h5.7' stroke='currentColor' />
      <path
        d='M7.94 12c0 2.21-.75 4.34-1.36 5.71-.3.68.18 1.52.93 1.52 3.69 0 6.68-3 6.68-6.69v-1.08c0-3.7-2.99-6.69-6.68-6.69-.75 0-1.24.84-.93 1.52A15 15 0 0 1 7.94 12'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='16.55' cy='12' r='2.35' fill='currentColor' />
      <circle cx='16.55' cy='12' r='2.35' stroke='currentColor' />
    </svg>
  )
}

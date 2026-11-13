import type { Icon } from './types'

export const IconHockey: Icon = ({
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
      data-slot='icon-ui-hockey'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.67 19.2h5.38c.7 0 1.05 0 1.32-.19.26-.19.37-.52.58-1.2l.44-1.35c.39-1.2.58-1.8.28-2.2-.3-.42-.93-.42-2.18-.42H3.67c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v1.36c0 .95 0 1.42.3 1.71.29.3.76.3 1.7.3'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.16 19.2h3.43c.72 0 1.08 0 1.34-.17a1 1 0 0 0 .25-.26c.18-.25.18-.61.18-1.34 0-.72 0-1.08-.18-1.33a1 1 0 0 0-.25-.26c-.26-.17-.62-.17-1.34-.17h-3.43c-.72 0-1.08 0-1.34.17a1 1 0 0 0-.25.26c-.18.25-.18.61-.18 1.33s0 1.09.18 1.34a1 1 0 0 0 .25.26c.26.17.62.17 1.34.17'
        fill='currentColor'
      />
      <path
        d='m15 3.53-2.76 10.32m0 0-.68 2.53c-.38 1.43-.57 2.14-1.1 2.55-.55.41-1.28.41-2.76.41H4.4c-.7 0-1.04 0-1.33-.08a2 2 0 0 1-1.33-1.34c-.09-.28-.09-.63-.09-1.32s0-1.04.09-1.33a2 2 0 0 1 1.33-1.33c.29-.09.63-.09 1.33-.09z'
        stroke='currentColor'
      />
      <path d='M5.23 19.2v-5.36' stroke='currentColor' />
      <path
        d='M20.57 15.67h-3.4c-.72 0-1.08 0-1.33.17a1 1 0 0 0-.26.26c-.18.25-.18.61-.18 1.33s0 1.09.18 1.34a1 1 0 0 0 .26.26c.25.17.61.17 1.33.17h3.4c.72 0 1.08 0 1.34-.17a1 1 0 0 0 .26-.26c.17-.25.17-.61.17-1.34 0-.72 0-1.08-.17-1.33a1 1 0 0 0-.26-.26c-.26-.17-.62-.17-1.34-.17'
        stroke='currentColor'
      />
    </svg>
  )
}

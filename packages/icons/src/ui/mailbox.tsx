import type { Icon } from './types'

export const IconMailbox: Icon = ({
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
      data-slot='icon-ui-mailbox'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.2 18.89c-1.96.07-2.93.1-3.55-.48-.6-.6-.6-1.57-.6-3.52v-2.7l-.24-1.94c-.07-.57-.1-.86-.21-1.12s-.3-.48-.65-.92L7.94 6.96h6.2c3.64 0 5.45 0 6.6 1.1l.17.16C22 9.37 22 11.19 22 14.82c0 1.75 0 2.62-.52 3.2l-.08.08c-.55.54-1.43.57-3.18.64z'
        fill='currentColor'
      />
      <path d='M9.76 18.7v-7.63a4.12 4.12 0 1 0-8.25 0v4.52' stroke='currentColor' />
      <path
        d='M6 6.95h7.6c3.18 0 4.76 0 5.94.69a5 5 0 0 1 1.77 1.77c.69 1.17.69 2.76.69 5.93 0 1.27 0 1.9-.28 2.37a2 2 0 0 1-.7.7c-.47.29-1.1.29-2.38.29H4.67c-1.08 0-1.62 0-2.04-.2a2 2 0 0 1-.91-.92c-.2-.42-.2-.96-.2-2.05'
        stroke='currentColor'
      />
      <path
        d='M6.32 11.36a.51.51 0 1 1-1.02 0 .51.51 0 0 1 1.02 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M13.86 12.32v-5.6c0-1.4 0-2.12.44-2.55.44-.44 1.15-.44 2.56-.44h.27'
        stroke='currentColor'
      />
    </svg>
  )
}

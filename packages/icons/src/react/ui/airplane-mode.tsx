import type { Icon } from './types'

export const IconAirplaneMode: Icon = ({
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
      data-slot='icon-ui-airplane-mode'
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
        d='M19.63 14.45c1.47-1.03 2.2-1.55 2.26-2.26v-.2c-.05-.72-.79-1.24-2.26-2.27a3 3 0 0 0-.8-.47c-.2-.06-.43-.06-.86-.06h-.72c-1.06 0-1.6 0-1.99-.29-.4-.29-.55-.8-.87-1.8l-.25-.8a4 4 0 0 0-.26-.68c-.1-.16-.23-.29-.5-.55l-3.5-3.46v4.68c0 1.32 0 1.97-.38 2.4l-.12.12c-.43.38-1.08.38-2.4.38-.45 0-.67 0-.89-.06l-.06-.02c-.2-.08-.39-.21-.75-.48L3.99 7.7a1.25 1.25 0 0 0-1.85 1.56l.92 1.84c.2.4.3.59.33.8q.05.29 0 .57c-.05.2-.15.4-.35.79l-.9 1.73a1.2 1.2 0 0 0 1.77 1.52l1.34-.96c.4-.28.59-.43.81-.5s.47-.07.95-.07h.23c1.4 0 2.1 0 2.53.43.44.44.45 1.14.47 2.53l.04 3.92 2.85-2.58c.24-.22.36-.33.46-.46.09-.13.15-.27.28-.57l.64-1.47c.38-.87.57-1.3.95-1.55.37-.25.85-.25 1.8-.25h.7c.44 0 .66 0 .87-.06l.06-.02c.2-.07.38-.2.74-.45'
        fill='currentColor'
      />
      <path
        d='m10.08 14.68-2.74.03c-.62 0-.94.01-1.22.13a3 3 0 0 0-.92.81l-.28.3c-.15.16-.22.24-.3.3a1 1 0 0 1-.37.15c-.1.02-.21.02-.43.02-.74 0-1.11 0-1.34-.13a1 1 0 0 1-.5-.83c-.01-.27.16-.6.5-1.25l.69-1.29c.24-.45.36-.68.36-.92 0-.25-.12-.47-.35-.93l-.73-1.4c-.33-.66-.5-.99-.49-1.25a1 1 0 0 1 .5-.82c.23-.14.6-.14 1.34-.14.22 0 .33 0 .44.03a1 1 0 0 1 .37.16c.09.07.16.15.31.31l.24.27c.45.5.67.75.97.88s.63.13 1.3.12l2.62-.02'
        stroke='currentColor'
      />
      <path
        d='M15.08 14.9h2.55c1.97 0 4.4-.94 4.4-2.89s-2.4-2.8-4.36-2.83l-2.6-.02'
        stroke='currentColor'
      />
      <path
        d='M15.03 9.13c0-1.81-1.1-3.7-2.3-5.21-1.12-1.4-1.67-2.11-2.36-1.85s-.63 1.21-.53 3.13l.21 4.02'
        stroke='currentColor'
      />
      <path
        d='M15.03 14.92c0 1.85-1.1 3.73-2.32 5.23-1.12 1.38-1.68 2.07-2.36 1.8s-.62-1.2-.5-3.1l.24-4.1'
        stroke='currentColor'
      />
    </svg>
  )
}

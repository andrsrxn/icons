import type { Icon } from './types'

export const IconAirplaneModeFilled: Icon = ({
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
      data-slot='icon-ui-airplane-mode-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.63 14.45c1.47-1.03 2.2-1.55 2.26-2.26v-.2c-.05-.72-.79-1.24-2.26-2.27a3 3 0 0 0-.8-.47c-.2-.06-.43-.06-.86-.06h-1.18c-.85 0-1.27 0-1.62-.2s-.56-.58-.98-1.31L12.44 4.6c-.18-.31-.27-.47-.39-.6a3 3 0 0 0-.57-.42l-3.04-2 .88 4.64c.2 1.1.3 1.64.13 2.06q-.17.41-.55.66c-.37.25-.93.25-2.04.25-.33 0-.5 0-.65-.03l-.3-.1c-.14-.06-.27-.16-.53-.35L3.99 7.7a1.25 1.25 0 0 0-1.85 1.56l.92 1.84c.2.4.3.59.33.8q.05.29 0 .57c-.05.2-.15.4-.35.79l-.9 1.73a1.2 1.2 0 0 0 1.77 1.52l1.42-1.02c.31-.23.47-.34.64-.4q.09-.05.19-.06c.18-.05.37-.05.75-.05 1.33 0 2 0 2.42.36q.21.17.35.42c.26.48.13 1.14-.14 2.45l-.75 3.67 3.74-2.69c.26-.18.38-.27.5-.4.1-.1.18-.24.34-.52l1.06-1.8c.42-.73.63-1.1.98-1.3s.77-.19 1.6-.19h.96c.43 0 .65 0 .86-.06l.06-.02c.2-.07.38-.2.74-.45'
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
        d='M15.08 15.06c-.35 1.65-1.71 3.39-3.16 4.85-1.52 1.52-2.28 2.29-2.94 1.9-.67-.38-.38-1.47.2-3.65l.87-3.27'
        stroke='currentColor'
      />
      <path
        d='M15.08 8.99c-.35-1.65-1.71-3.39-3.16-4.84-1.52-1.53-2.28-2.3-2.94-1.91s-.38 1.47.2 3.66l.87 3.26'
        stroke='currentColor'
      />
    </svg>
  )
}

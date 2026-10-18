import type { FlagIcon } from './types'

export const IconFlagMQ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MQ',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-mq'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='mq-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mq-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#345cb3' />
            <stop offset='1' stopColor='#23448d' />
          </linearGradient>
          <linearGradient
            id='mq-d'
            x1='16.3'
            x2='16.3'
            y1='1.1'
            y2='4.97'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mq-e'
            x1='4.7'
            x2='4.7'
            y1='1.1'
            y2='4.97'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mq-f'
            x1='16.3'
            x2='16.3'
            y1='10.1'
            y2='13.97'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mq-g'
            x1='4.7'
            x2='4.7'
            y1='10.1'
            y2='13.97'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mq-h'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='mq-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mq-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mq-clip)'>
        <g clipPath='url(#mq-a)'>
          <path fill='url(#mq-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mq-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#mq-d)'
            d='m15.92 1.6.47.01c.2.02.35.06.34.02-.02-.07 0-.08-.03-.07-.05.04.02 0-.28.17-.44.25-.63.44-.54.79.09.3.31.39.84.47l.07.01c.21.03.3.05.37.08.02 0-.01-.04 0-.06-.01.02-.15.08-.5.15l-.18.03c-.68.14-1.02.32-1.07.8-.05.5.48.87 1.15.95.69.1 1.28-.13 1.34-.69.04-.35-.2-.56-.6-.64a4 4 0 0 0-1.02-.01 10 10 0 0 0-1.39.23.25.25 0 0 0 .12.49 11 11 0 0 1 1.32-.23q.56-.04.88 0c.16.04.2.07.2.1-.03.2-.34.32-.78.26s-.74-.26-.72-.42.2-.25.67-.35l.17-.03c.58-.12.8-.2.89-.5q.09-.37-.28-.54a2 2 0 0 0-.5-.11l-.06-.01q-.44-.08-.43-.11c0-.02.06-.1.3-.23l.16-.1q.1-.04.16-.1.28-.17.22-.46c-.07-.27-.34-.35-.78-.39h-.6a.25.25 0 0 0 .02.5z'
          />
          <path
            fill='url(#mq-e)'
            d='m4.32 1.6.47.01c.2.02.35.06.34.02-.02-.07 0-.08-.03-.07-.05.04.02 0-.28.17-.44.25-.63.44-.54.79.09.3.31.39.84.47L5.2 3c.21.03.3.05.37.08.02 0-.01-.04 0-.06q0 .04-.5.15l-.18.03c-.68.14-1.02.32-1.07.8-.05.5.48.87 1.15.95.69.1 1.28-.13 1.34-.69.04-.35-.2-.56-.6-.64a4 4 0 0 0-1.02-.01 10 10 0 0 0-1.39.23.25.25 0 1 0 .12.49 11 11 0 0 1 1.32-.23q.56-.04.88 0c.16.04.2.07.2.1-.03.2-.34.32-.78.26s-.74-.26-.72-.42.2-.25.67-.35l.17-.03c.58-.12.8-.2.89-.5q.08-.37-.28-.54a2 2 0 0 0-.5-.11L5.2 2.5q-.44-.08-.43-.11c0-.02.06-.1.3-.23l.16-.1q.1-.04.16-.1.28-.17.22-.46c-.07-.27-.34-.35-.78-.39h-.6a.25.25 0 1 0 .02.5z'
          />
          <path
            fill='url(#mq-f)'
            d='m15.92 10.6.47.01c.2.02.35.06.34.02-.02-.07 0-.08-.03-.07-.05.04.02 0-.28.17-.44.25-.63.44-.54.79.09.3.31.39.84.47l.44.1c.02 0-.01-.05 0-.07-.01.02-.15.08-.5.15l-.18.03c-.68.14-1.02.32-1.07.8-.05.5.48.87 1.15.95.69.1 1.28-.13 1.34-.69.04-.35-.2-.56-.6-.64a4 4 0 0 0-1.02-.01 10 10 0 0 0-1.39.23.25.25 0 0 0 .12.49 11 11 0 0 1 1.32-.23q.56-.04.88 0c.16.04.2.07.2.1-.03.2-.34.32-.78.26s-.74-.26-.72-.42.2-.25.67-.35l.17-.03c.58-.12.8-.2.89-.5q.09-.37-.28-.54a2 2 0 0 0-.5-.11l-.06-.01q-.44-.09-.43-.11c0-.02.06-.1.3-.23l.16-.1q.1-.04.16-.1.28-.17.22-.46c-.07-.27-.34-.35-.78-.39h-.6a.25.25 0 0 0 .02.5z'
          />
          <path
            fill='url(#mq-g)'
            d='m4.32 10.6.47.01c.2.02.35.06.34.02-.02-.07 0-.08-.03-.07-.05.04.02 0-.28.17-.44.25-.63.44-.54.79.09.3.31.39.84.47l.07.01c.21.03.3.05.37.08.02 0-.01-.04 0-.06q0 .04-.5.15l-.18.03c-.68.14-1.02.32-1.07.8-.05.5.48.87 1.15.95.69.1 1.28-.13 1.34-.69.04-.35-.2-.56-.6-.64a4 4 0 0 0-1.02-.01 10 10 0 0 0-1.39.23.25.25 0 1 0 .12.49 11 11 0 0 1 1.32-.23q.56-.04.88 0c.16.04.2.07.2.1-.03.2-.34.32-.78.26s-.74-.26-.72-.42.2-.25.67-.35l.17-.03c.58-.12.8-.2.89-.5q.08-.37-.28-.54a2 2 0 0 0-.5-.11l-.06-.01q-.44-.09-.43-.11c0-.02.06-.1.3-.23l.16-.1q.1-.04.16-.1.28-.17.22-.46c-.07-.27-.34-.35-.78-.39h-.6a.25.25 0 0 0 .02.5z'
          />
          <path
            fill='url(#mq-h)'
            fillRule='evenodd'
            d='M9 6H0v3h9v6h3V9h9V6h-9V0H9z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}

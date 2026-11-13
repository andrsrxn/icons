import type { Icon } from './types'

export const IconGuitars: Icon = ({
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
      data-slot='icon-ui-guitars'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M18.38 21.24h-1.2A3.08 3.08 0 0 1 14.32 17l.44-1.06.03-.08a6 6 0 0 0 .37-3.14l-.03-.26q-.15-.91-.13-.98c.03-.41.31-.58.7-.42l.95.67c.51.37 1.1.63 1.72.63a3 3 0 0 0 1.7-.63l.94-.66c.4-.17.69 0 .7.43q.02.07-.12.96l-.03.22-.02.11a6 6 0 0 0 .43 3.18l.44 1.07a3.04 3.04 0 0 1-2.8 4.21z'
        stroke='currentColor'
      />
      <path d='M16.9 15.69h2.94' stroke='currentColor' />
      <path d='M16.9 17.97h2.94' stroke='currentColor' />
      <path d='M18.37 12.3V6.23' stroke='currentColor' />
      <path
        opacity='.2'
        d='m19.57 3.95-.01-.36a1 1 0 0 0-.83-.83l-.36-.01-.36.01a1 1 0 0 0-.83.83l-.01.36v1.08l.01.36a1 1 0 0 0 .83.83l.36.01h.36a1 1 0 0 0 .83-.84l.01-.36z'
        fill='currentColor'
      />
      <path
        d='M18.37 6.23c-.26 0-.4 0-.5-.02a1 1 0 0 1-.76-.76q-.02-.13-.02-.5V3.81c0-.26 0-.39.02-.5a1 1 0 0 1 .76-.75c.1-.03.24-.03.5-.03v0a2 2 0 0 1 .5.03 1 1 0 0 1 .76.76c.02.1.02.23.02.5v1.13q0 .37-.02.5a1 1 0 0 1-.76.76c-.1.02-.24.02-.5.02'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m22.38 16.77.05.13a3 3 0 0 1 .03 1.87l-.05.13-.07.2a3 3 0 0 1-1.96 1.83l-.2.05-.7.17c-.4.1-.6.16-.8.18a3 3 0 0 1-.82-.02c-.2-.03-.4-.09-.8-.21l-.75-.23-.16-.05a3 3 0 0 1-1.78-1.6l-.07-.15a3 3 0 0 1-.03-2.45l.83-2.04q.16-.4.1-.84l-.25-1.89a.66.66 0 0 1 .95-.67l.44.24c.37.2.55.31.74.38a3 3 0 0 0 2.13.03c.19-.07.37-.17.75-.37l.87-.46a.64.64 0 0 1 .94.64l-.24 1.99q-.07.62.14 1.22z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.92 15.4c.16.42.24.63.3.84q.14.64.01 1.27c-.04.22-.12.43-.27.85-.25.7-.37 1.04-.56 1.33a3 3 0 0 1-1.54 1.21c-.32.11-.69.15-1.42.23l-.32.03a6 6 0 0 1-.85.03l-.48-.07-.75-.14c-.5-.09-.76-.13-.99-.22a3 3 0 0 1-1.47-1.13 6 6 0 0 1-.47-.9c-.2-.42-.3-.63-.36-.84a3 3 0 0 1 0-1.7c.06-.22.16-.43.35-.86l1-2.14.18-.48.03-.1.04-.16.14-.5a3 3 0 0 1 2.6-1.99H7.1a3 3 0 0 1 2.7 2.22l.09.44v.05a3 3 0 0 0 .14.47l.02.05zm-2.76.05c0 1.01-.68 1.6-1.55 1.6-.86 0-1.6-.6-1.6-1.6 0-1.02.7-1.58 1.56-1.58s1.59.58 1.59 1.58'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M6.6 21.24H5.18a3.45 3.45 0 0 1-3.28-2.37l-.07-.22a4.7 4.7 0 0 1 .45-3.91 7 7 0 0 0 .97-2.73l.07-.51.02-.15a2 2 0 0 1 1.9-1.67h2.4l.55.01a2 2 0 0 1 1.7 1.5l.07.55.03.24q.18 1.4.77 2.68l.06.14c.52 1.13.65 2.4.36 3.6a3.7 3.7 0 0 1-3.58 2.84z'
        stroke='currentColor'
      />
      <circle cx='6.64' cy='15.42' r='1.44' stroke='currentColor' />
      <path d='M6.64 11.43V5.86' stroke='currentColor' />
      <path d='M5.4 18.95h2.5' stroke='currentColor' />
      <path
        opacity='.2'
        d='M7.67 3.79v-.12a1 1 0 0 0-.94-.94h-.24a1 1 0 0 0-.94.94v1.19a1 1 0 0 0 .94.95h.24a1 1 0 0 0 .94-.95z'
        fill='currentColor'
      />
      <path
        d='m6.6 5.81-.38-.01a1 1 0 0 1-.82-.81l-.01-.4v-.84l.01-.39a1 1 0 0 1 .82-.81c.08-.02.18-.02.39-.02v0c.2 0 .3 0 .4.02a1 1 0 0 1 .8.81c.02.09.02.19.02.4v.83q0 .28-.02.4a1 1 0 0 1-.8.8c-.1.02-.2.02-.4.02'
        stroke='currentColor'
      />
    </svg>
  )
}

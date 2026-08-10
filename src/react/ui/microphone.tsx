import type { Icon } from './types'

export const IconMicrophone: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='microphone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.62 7.02a3.38 3.38 0 0 1 6.76 0v3.9a3.38 3.38 0 1 1-6.76 0z'
        fill='currentColor'
      />
      <path
        d='M8.62 10.93h-.75zm6.76 0h-.75zm0-3.91h.75zm-6.76 0h.75zm9.92 2.55a.75.75 0 0 0-1.5 0zm-.75 1.55h-.75zm-11.58 0h-.75zm.75-1.55a.75.75 0 0 0-1.5 0zM12 16.91v-.75zm-2.05 2.72a.75.75 0 0 0 0 1.5zm4.1 1.5a.75.75 0 0 0 0-1.5zm-2.8-.75a.75.75 0 0 0 1.5 0zm4.13-13.36h-.75v3.9h1.5v-3.9zm-6.76 3.9h.75v-3.9h-1.5v3.9zm3.38 3.4v-.75a2.63 2.63 0 0 1-2.63-2.63h-1.5A4.13 4.13 0 0 0 12 15.06zm3.38-3.38h-.75A2.63 2.63 0 0 1 12 13.56v1.5a4.13 4.13 0 0 0 4.13-4.13zM12 3.63v.75a2.63 2.63 0 0 1 2.63 2.64h1.5A4.13 4.13 0 0 0 12 2.88zm0 0v-.75a4.13 4.13 0 0 0-4.13 4.14h1.5A2.63 2.63 0 0 1 12 4.38zm5.79 5.94h-.75v1.55h1.5V9.57zM6.2 11.12h.75V9.57h-1.5v1.55zm5.8 5.79v-.75a5.04 5.04 0 0 1-5.04-5.04h-1.5A6.54 6.54 0 0 0 12 17.66zm5.79-5.79h-.75A5.04 5.04 0 0 1 12 16.16v1.5a6.54 6.54 0 0 0 6.54-6.54zm-7.84 9.26v.75h4.1v-1.5h-4.1zm2.05 0h.75v-3.47h-1.5v3.47z'
        fill='currentColor'
      />
    </svg>
  )
}

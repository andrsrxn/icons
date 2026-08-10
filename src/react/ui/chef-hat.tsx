import type { Icon } from './types'

export const IconChefHat: Icon = ({
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
      data-slot='chef-hat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M6.67 16.65h10.41v2.95H6.67z' />
      <path
        d='m8.77 7.89-.54.52a.75.75 0 0 0 1.26-.7zm-2.05 6.93a.75.75 0 0 0 0-1.5zm10.58-1.5a.75.75 0 1 0 0 1.5zm-2.02-5.67-.74-.1zm-4.8-3.54-.3-.68zm4.5 1.64-.67.31zm-.85 3.01a.75.75 0 0 0 1.38.59l-.69-.3zM8.77 7.9l.53-.53a3 3 0 0 0-1.2-.68c-.4-.13-.8-.2-1.1-.2v1.5c.1 0 .36.04.64.13q.45.14.59.3zM7 7.23v-.75a4.2 4.2 0 0 0-4.2 4.17h1.49c0-1.47 1.2-2.67 2.7-2.67zm-3.46 3.42H2.8c0 1.08.3 2.12.98 2.9.68.81 1.7 1.27 2.95 1.27v-1.5c-.86 0-1.44-.3-1.81-.74a3 3 0 0 1-.62-1.93zm13.76 3.42v.75c1.26 0 2.27-.46 2.95-1.26.66-.8.96-1.83.96-2.9h-1.5c0 .8-.23 1.48-.6 1.93-.37.43-.94.73-1.8.73zm3.16-3.42h.75a4.2 4.2 0 0 0-4.2-4.17v1.5c1.5 0 2.7 1.2 2.7 2.67zM17 7.23v-.75c-.25 0-.63.02-1 .1-.37.06-.84.2-1.2.5l.48.57.49.57q.07-.09.5-.17c.26-.05.54-.07.73-.07zm-8.23.66.72-.18c-.32-1.31.24-2.44 1.3-2.91l-.3-.69-.31-.68a3.9 3.9 0 0 0-2.14 4.63zm1.71-3.78.3.69a2.64 2.64 0 0 1 3.53 1.26l.68-.3.68-.32a4.14 4.14 0 0 0-5.5-2.01zm4.5 1.64-.67.31q.33.76.23 1.49l.74.1.75.1q.15-1.17-.36-2.31zm.3 1.9-.74-.1v.03l-.06.21q-.08.3-.35.97l.69.3.69.29a10 10 0 0 0 .51-1.59v-.01z'
        fill='currentColor'
      />
      <path
        d='M17.08 12.53v5.04c0 1.16 0 1.74-.33 2.04s-.97.23-2.25.1q-1.1-.11-2.5-.11t-2.5.1c-1.28.14-1.92.2-2.25-.1s-.33-.87-.33-2.03v-5.04'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.02 16.91a12.5 12.5 0 0 0-5.02-.85c-2.09 0-3.42.23-5.02.85'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

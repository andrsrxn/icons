import type { Icon } from './types'

export const IconBrowserLightning: Icon = ({
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
      data-slot='icon-ui-browser-lightning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.97 6.32c0-2.1 1.69-3.78 3.78-3.78h12.48A3.8 3.8 0 0 1 22 6.32c0 .52-.43.94-.95.94H2.91a.94.94 0 0 1-.94-.94'
        fill='currentColor'
      />
      <path
        d='M22 11.29v-.75c0-3.77 0-5.66-1.17-6.83s-3.05-1.17-6.82-1.17H9.77c-3.58 0-5.37 0-6.52 1.06l-.22.22c-1.06 1.15-1.06 2.94-1.06 6.52 0 3.59 0 5.38 1.06 6.53l.22.22c1.15 1.06 2.94 1.06 6.52 1.06h.48'
        stroke='currentColor'
      />
      <path d='M21.81 7.26H2.16' stroke='currentColor' />
      <path
        opacity='.2'
        d='m13.87 15.15 1.65-2.54c.85-1.3 1.27-1.96 1.55-2.05a.8.8 0 0 1 .92.36c.15.26.01 1.03-.26 2.57-.07.38-.1.57-.07.73q.09.31.35.5a2 2 0 0 0 .72.18l.2.03c.83.13 1.24.2 1.43.46q.12.15.15.34c.06.31-.17.66-.63 1.37l-1.64 2.49c-.92 1.4-1.39 2.11-1.7 2.18a.8.8 0 0 1-.84-.33c-.18-.27-.03-1.1.27-2.76.07-.43.11-.64.06-.82a.8.8 0 0 0-.32-.45c-.16-.1-.37-.13-.8-.19l-.1-.01c-.74-.1-1.12-.16-1.31-.36a1 1 0 0 1-.21-.47c-.03-.28.17-.6.58-1.23'
        fill='currentColor'
      />
      <path
        d='m15.52 12.61-1.65 2.54h0c-.4.64-.61.95-.58 1.23q.02.27.21.47c.2.2.57.26 1.31.36l.1.01c.43.06.64.09.8.2q.23.16.32.44c.05.18.01.4-.06.82-.3 1.66-.45 2.49-.27 2.76s.51.4.84.33c.31-.07.78-.77 1.7-2.18h0l1.64-2.5c.46-.7.7-1.05.63-1.36a1 1 0 0 0-.15-.34c-.19-.26-.6-.33-1.43-.46l-.2-.03a2 2 0 0 1-.72-.19.8.8 0 0 1-.35-.49c-.04-.16 0-.35.07-.73h0c.27-1.54.41-2.31.26-2.57a.8.8 0 0 0-.92-.36c-.28.08-.7.74-1.55 2.05'
        stroke='currentColor'
      />
    </svg>
  )
}

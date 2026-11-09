import type { Icon } from './types'

export const IconGameControllerScreen: Icon = ({
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
      data-slot='icon-ui-game-controller-screen'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M7.41 14.58h3.42' stroke='currentColor' />
      <path d='M9.12 16.29v-3.42' stroke='currentColor' />
      <path
        d='M14.47 16.2a.46.46 0 1 1-.92 0 .46.46 0 0 1 .92 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.49 13.66a.48.48 0 1 1-.96 0 .48.48 0 0 1 .96 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 19.1h-1.29l-.44.01a3 3 0 0 0-1.74.72l-.32.3-.36.36a2.3 2.3 0 0 1-3.92-1.86l.22-2.25c.2-1.9.29-2.86.63-3.62a5 5 0 0 1 2.92-2.64c.8-.28 1.75-.28 3.67-.28h1.27c1.92 0 2.88 0 3.67.28a5 5 0 0 1 2.92 2.65c.35.76.44 1.71.63 3.62l.22 2.28a2.28 2.28 0 0 1-3.87 1.83l-.38-.37a3 3 0 0 0-2.06-1.02z'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.87 8.25c0-1.31 0-1.97.16-2.51a4 4 0 0 1 2.75-2.75c.54-.15 1.2-.15 2.51-.15h8.95c1.75 0 2.62 0 3.31.26a4 4 0 0 1 2.3 2.3c.26.7.26 1.57.26 3.3v3.22a1.66 1.66 0 0 1-3.04.93l-.64-.97a3.3 3.3 0 0 0-2.38-1.43l-3.15-.33a7 7 0 0 0-.84-.07c-.22 0-.43.02-.85.07l-2.92.3c-1.1.13-2.11.71-2.76 1.62l-.66.94a1.65 1.65 0 0 1-3-.96z'
        fill='currentColor'
      />
      <path
        d='M4.19 13.67a2.46 2.46 0 0 1-2.46-2.46V8.25c0-1.31 0-1.97.15-2.51a4 4 0 0 1 2.75-2.75c.54-.15 1.2-.15 2.51-.15h9.72c1.31 0 1.97 0 2.5.15a4 4 0 0 1 2.76 2.75c.15.54.15 1.2.15 2.51v3.08a2.33 2.33 0 0 1-2.33 2.34'
        stroke='currentColor'
      />
    </svg>
  )
}

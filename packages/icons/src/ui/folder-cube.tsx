import type { Icon } from './types'

export const IconFolderCube: Icon = ({
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
      data-slot='icon-ui-folder-cube'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m18.68 12.95-3.51 2.18-.36 3 .94 2.05H9.67c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V7.42A3.7 3.7 0 0 1 5.4 3.71h.8c.99 0 1.48 0 1.95.11a4 4 0 0 1 .84.31c.43.22.81.54 1.56 1.18.76.64 1.13.96 1.56 1.18a4 4 0 0 0 .85.3c.47.12.96.12 1.95.12h.17c2.97 0 4.46 0 5.5.75a4 4 0 0 1 .92.92c.75 1.05.75 2.53.75 5.5v.68z'
        fill='currentColor'
      />
      <path
        d='M11.38 20.18h-1.7c-3.78 0-5.67 0-6.84-1.17-1.17-1.18-1.17-3.06-1.17-6.83V6.4a2.57 2.57 0 0 1 2.57-2.57h2.2c.66 0 .98 0 1.3.05a4 4 0 0 1 1.6.62c.26.18.5.4.98.85s.72.67.98.84a4 4 0 0 0 1.6.63c.3.05.64.05 1.3.05h4.67c1.86 0 3.37 1.5 3.37 3.36'
        stroke='currentColor'
      />
      <path
        d='M14.99 16.8v.7c0 .85 0 1.27.2 1.62s.57.56 1.3.98l.7.4c.74.43 1.1.64 1.5.64s.77-.2 1.5-.63l.72-.4c.73-.43 1.1-.64 1.3-1 .2-.34.2-.76.2-1.6v-.72c0-.84 0-1.26-.2-1.61s-.57-.56-1.3-.98l-.71-.41c-.74-.42-1.1-.64-1.5-.64s-.77.22-1.5.64l-.71.4c-.73.43-1.1.64-1.3.99s-.2.77-.2 1.61'
        stroke='currentColor'
      />
      <path d='m15.2 15.39 3.5 1.92' stroke='currentColor' />
      <path d='M18.7 17.31v3.75' stroke='currentColor' />
      <path d='m22.2 15.39-3.5 1.92' stroke='currentColor' />
      <path
        opacity='.2'
        d='m21.85 19.62-1.64.98a1 1 0 0 1-1.51-.86v-1.81c0-.37.2-.7.52-.88l1.65-.88a1 1 0 0 1 1.47.88v1.71a1 1 0 0 1-.49.86'
        fill='currentColor'
      />
    </svg>
  )
}

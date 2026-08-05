import type { Icon } from './types'

export const IconFolderCheck: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='folder-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.726 7.357V14.5c0 1.886 0 2.828.586 3.414.585.586 1.528.586 3.414.586h7.682c1.01 0 1.515 0 1.945-.222.431-.222.724-.632 1.311-1.454l.866-1.213c.369-.517.554-.776.649-1.073.095-.298.095-.616.095-1.25v-1.602c0-1.886 0-2.829-.586-3.414-.585-.586-1.528-.586-3.414-.586h-2.8c-.577 0-.866 0-1.133-.076a2 2 0 0 1-.513-.228c-.236-.147-.43-.361-.818-.79-.388-.427-.582-.641-.818-.788a2 2 0 0 0-.513-.228C9.412 5.5 9.123 5.5 8.545 5.5H5.583a1.857 1.857 0 0 0-1.857 1.857Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.488 18.5H7.726c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V7.357c0-1.026.831-1.857 1.857-1.857h2.962c.578 0 .867 0 1.134.076a2 2 0 0 1 .513.228c.236.147.43.36.818.789.388.428.582.642.818.79a2 2 0 0 0 .513.227c.267.076.556.076 1.134.076h3.842c.892 0 1.338 0 1.692.14a2 2 0 0 1 1.126 1.126c.14.353.14.8.14 1.691m-5.417 5.915 1.91 2.903 3.695-5.744'
      />
    </svg>
  )
}

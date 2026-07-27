import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMuNzI2IDcuMzU3VjE0LjVjMCAxLjg4NiAwIDIuODI4LjU4NiAzLjQxNC41ODUuNTg2IDEuNTI4LjU4NiAzLjQxNC41ODZoNy42ODJjMS4wMSAwIDEuNTE1IDAgMS45NDUtLjIyMi40MzEtLjIyMi43MjQtLjYzMiAxLjMxMS0xLjQ1NGwuODY2LTEuMjEzYy4zNjktLjUxNy41NTQtLjc3Ni42NDktMS4wNzMuMDk1LS4yOTguMDk1LS42MTYuMDk1LTEuMjV2LTEuNjAyYzAtMS44ODYgMC0yLjgyOS0uNTg2LTMuNDE0LS41ODUtLjU4Ni0xLjUyOC0uNTg2LTMuNDE0LS41ODZoLTIuOGMtLjU3NyAwLS44NjYgMC0xLjEzMy0uMDc2YTIgMiAwIDAgMS0uNTEzLS4yMjhjLS4yMzYtLjE0Ny0uNDMtLjM2MS0uODE4LS43OS0uMzg4LS40MjctLjU4Mi0uNjQxLS44MTgtLjc4OGEyIDIgMCAwIDAtLjUxMy0uMjI4QzkuNDEyIDUuNSA5LjEyMyA1LjUgOC41NDUgNS41SDUuNTgzYTEuODU3IDEuODU3IDAgMCAwLTEuODU3IDEuODU3WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjI3NCAxMC42NDNWNy42ODZIMTJMMTAuMDIgNS41SDMuNzI2djEzaDguNzYybTIuMzctMS45NDIgMS45MSAyLjkwMyAzLjY5NS01Ljc0NCIvPjwvc3ZnPg==)
 */
export const IconFolderCheck: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-folder-check'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.726 7.357V14.5c0 1.886 0 2.828.586 3.414.585.586 1.528.586 3.414.586h7.682c1.01 0 1.515 0 1.945-.222.431-.222.724-.632 1.311-1.454l.866-1.213c.369-.517.554-.776.649-1.073.095-.298.095-.616.095-1.25v-1.602c0-1.886 0-2.829-.586-3.414-.585-.586-1.528-.586-3.414-.586h-2.8c-.577 0-.866 0-1.133-.076a2 2 0 0 1-.513-.228c-.236-.147-.43-.361-.818-.79-.388-.427-.582-.641-.818-.788a2 2 0 0 0-.513-.228C9.412 5.5 9.123 5.5 8.545 5.5H5.583a1.857 1.857 0 0 0-1.857 1.857Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.274 10.643V7.686H12L10.02 5.5H3.726v13h8.762m2.37-1.942 1.91 2.903 3.695-5.744'
      />
    </svg>
  )
}

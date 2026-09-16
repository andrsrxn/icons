interface CodeBlockContentProps {
  code: string
}

export function CodeBlockContent({ code }: CodeBlockContentProps) {
  return (
    <div className='overflow-x-auto font-mono dark bg-[#24292e] text-blue-200 text-sm h-full'>
      <pre className='p-4 w-max'>
        <code>{code}</code>
      </pre>
    </div>
  )
}

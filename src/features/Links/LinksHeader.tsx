import { Plus } from 'lucide-react'

export function LinksHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Links</h1>
        <p className="text-muted-foreground mt-1">Manage and analyze your shortened links</p>
      </div>
      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 w-fit">
        <Plus size={18} />
        New Link
      </button>
    </div>
  )
}
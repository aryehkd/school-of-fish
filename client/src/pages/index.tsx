import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { ImageUpload } from "../components/image-upload/ImageUpload"
import { NotesList } from "../components/notes-list/NotesList"
import AppBar from "../components/app-bar"

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <AppBar>
        <NotesList />
      </AppBar>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

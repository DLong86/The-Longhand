import { useState } from "react";
import { Navigate } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "../Editor";

export default function CreatePost() {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [content, setContent] = useState("");
	const [files, setFiles] = useState("");
	const [redirect, setRedirect] = useState(false);

	const createNewPost = async (e) => {
		e.preventDefault();

		const data = new FormData();
		data.set("title", title);
		data.set("summary", summary);
		data.set("content", content);
		data.set("file", files[0]);

		const response = await fetch("http://localhost:4000/post", {
			method: "POST",
			body: data,
			credentials: "include",
		});
		if (response.ok) {
			setRedirect(true);
		}
	};

	if (redirect) {
		return <Navigate to={"/"} />;
	}
	return (
		<form onSubmit={createNewPost}>
			<input
				type="title"
				placeholder="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type="summary"
				placeholder="snippet"
				value={summary}
				onChange={(e) => setSummary(e.target.value)}
			/>
			<input type="file" onChange={(e) => setFiles(e.target.files)} />
			<Editor value={content} onChange={setContent} />
			<button style={{ marginTop: "10px" }}>Create Post</button>
		</form>
	);
}

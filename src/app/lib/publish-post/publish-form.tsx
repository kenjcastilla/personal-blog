'use client';

import { useFormState, useFormStatus } from "react-dom";
import { insertPostIntoSupabase } from "./actions";

const initialState = { message: "" }

function SubmitButton() {
    const { pending } = useFormStatus();

    return (<button type="submit" aria-disabled={pending}>
        Publish
    </button>)
}

export function PublishPostForm() {
    const [state, formAction] = useFormState(insertPostIntoSupabase, initialState);

    return (
        <form action={formAction}>
            <div className="flex flex-col w-full h-fit">
                <label htmlFor="titleInput">Post Title</label>
                <input type="text" id="titleInput" name="titleInput" />
                <div className="w-full h-[1em]"></div>
                <label htmlFor="dateInput">Date Written (YYYY-MM-DD):</label>
                <input type="text" id="dateInput" name="dateInput" required />
                <div className="w-full h-[1em]"></div>
                <label htmlFor="categoryInput">Category</label>
                <select id="categoryInput" name="categoryInput" required>
                    <option value="intellection">Intellection</option>
                    <option value="music">Music</option>
                    <option value="global">Global</option>
                    <option value="miscellaneous">Miscellaneous</option>
                </select>
                <div className="w-full h-[1em]"></div>
                <label htmlFor="contentInput">Write Post Content</label>
                <input type="text" id="contentInput" name="contentInput" 
                    className="h-[5em]"/>
                <div className="w-full h-[1em]"></div>
                <label htmlFor="tagsInput">Enter Tags (ex. &#39;tag, tag, tag&#39;)</label>
                <input type="text" id="tagsInput" name="tagsInput" />
                <div className="w-full h-[2em]"></div>
                <SubmitButton />
                <p aria-live="polite" className="sr-only" role="status">
                    {state?.message}
                </p>
            </div>
        </form>
    );
}
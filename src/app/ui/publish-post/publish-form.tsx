'use client';

import { useFormState, useFormStatus } from "react-dom";
import { insertPostIntoSupabase } from "../../lib/publish-post/functions";
import { useEffect, useState } from "react";
import CancelButton from "./cancel-button";

const initialState = { message: "" }

function SubmitButton() {
    const { pending } = useFormStatus();
    const [submitButtonText, setSubmitButtonText] = useState('Publish');
    useEffect(() => {
        if (pending) {
            setSubmitButtonText('------');
            setTimeout(() => {
                setSubmitButtonText('Publish');
            }, 3000);
        }
    }, [pending])
    return <button id="publishFormSubmitButton" type="submit" aria-disabled={pending}
        className="text-md md:w-[20%] md:h-[2.5em] md:border-2 border-custom_black dark:border-custom_white md:rounded-lg">
        {submitButtonText}
    </button>
}

export function PublishPostForm() {
    const [state, formAction] = useFormState(insertPostIntoSupabase, initialState);
    const date = new Date().toJSON();

    return (
        <form action={formAction} className="overflow-auto-y w-full h-full">
            <div className="flex flex-col w-full h-auto">
                <label htmlFor="titleInput" className="">Title of Blog Post:</label>
                <input type="text" placeholder="Blog Post Title" id="titleInput" name="title" className="px-1 text-custom_black border-2 border-custom_black dark:border-custom_white rounded-md" />
                <div className="w-full h-[1em]"></div>
                <label htmlFor="dateInput">Date Written (YYYY-MM-DD):</label>
                <input type="text" id="dateInput" name="write_date" className="px-1 text-custom_black border-2 border-custom_black dark:border-custom_white rounded-md" placeholder={`${date.slice(0, 10)}`} required />
                <div className="w-full h-[1em]"></div>
                <label htmlFor="categoryInput">Category:</label>
                <select id="categoryInput" name="category" required className="px-1 text-custom_black border-2 border-custom_black dark:border-custom_white rounded-md">
                    <option value="intellection">Intellection</option>
                    <option value="music">Music</option>
                    <option value="global">Global</option>
                    <option value="miscellaneous">Miscellaneous</option>
                    <option value="curation">Curation</option>
                </select>
                <div className="w-full h-[1em]"></div>
                <label htmlFor="contentInput">Write Post Content:</label>
                <div className="w-auto h-fit">
                    <textarea id="contentInput" rows={8} name="content" placeholder="Enter the blog post content here..."
                        className="px-1 w-full h-full text-custom_black border-2 border-custom_black dark:border-custom_white rounded-md" />
                </div>
                <div className="w-full h-[1em]"></div>
                <label htmlFor="tagsInput">Enter Tags (separate by commas):</label>
                <input type="text" id="tagsInput" name="tags" placeholder="tag1, tag2, tag3, tag4, tag5" className="h-[2em] px-1 text-custom_black border-2 border-custom_black dark:border-custom_white rounded-md" />
                <div className="w-full h-[4em]"></div>
                <div className="w-full h-auto flex flex-row space-x-5">
                    <SubmitButton />
                    <CancelButton />
                </div>
                <p aria-live="polite" className="sr-only" role="status">
                    {state?.message}
                </p>
                <div className="w-full h-[3em]"></div>
            </div>
        </form>
    );
}
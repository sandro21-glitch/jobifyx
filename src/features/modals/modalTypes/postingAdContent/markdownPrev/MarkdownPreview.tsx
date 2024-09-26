import ReactMarkdown from "react-markdown";
import MarkdownHeader from "./MarkdownHeader";

type MardownTypes = {
  jobDescription: string;
  jobComment: string;
  jobTitle: string;
  jobCompanyName: string;
  jobPublishDate: string;
  jobDeadline: string;
};

const MarkdownPreview = ({
  jobComment,
  jobDescription,
  jobCompanyName,
  jobTitle,
  jobDeadline,
  jobPublishDate,
}: MardownTypes) => {
  return (
    <div className="w-full h-full">
      <h4 className="mt-4 mb-2 text-center">გადახედვა</h4>
      <hr />
      <MarkdownHeader
        jobTitle={jobTitle}
        jobCompanyName={jobCompanyName}
        jobPublishDate={jobPublishDate}
        jobDeadline={jobDeadline}
      />
      <div className="mt-2 text-[14px]" style={{ whiteSpace: "pre-wrap" }}>
        <ReactMarkdown>{jobComment}</ReactMarkdown>
        <ReactMarkdown>{jobDescription}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;

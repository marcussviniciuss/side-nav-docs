
import { Code } from "lucide-react";
import Breadcrumb from "../Breadcrumb";

const DomainLogicContent = () => {
  return (
    <div className="max-w-4xl">
      <Breadcrumb items={[
        { title: "Paradigm" },
        { title: "Logical model" },
        { title: "Domain logic" }
      ]} />
      
      <div className="mb-4">
        <span className="text-sm text-muted-foreground">Version: 6.x</span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Domain logic</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          <span className="text-doc-blue cursor-pointer hover:underline">Properties</span> are the basic concept for business logic and are responsible for storing and calculating data.
        </p>

        <p className="mb-4">
          An important feature of properties is that they do not change the data in the system in any way – for this, the platform has <span className="text-doc-blue cursor-pointer hover:underline">actions</span>.
        </p>

        <p className="mb-4">
          Actions answer the question of what to do, but do not answer the question of when to do it. To define such moments, the platform has <span className="text-doc-blue cursor-pointer hover:underline">events</span>.
        </p>

        <p className="mb-6">
          As a rule, the business logic does not allow just any data changes: only changes subject to certain rules. The platform uses <span className="text-doc-blue cursor-pointer hover:underline">constraints</span> to define these rules.
        </p>

        <p className="mb-8">
          Accordingly, the summary table for all elements of the business logic is as follows:
        </p>

        <div className="bg-white border rounded-lg overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">System elements</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Answer the question</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Character</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium">Properties</td>
                <td className="px-6 py-4 text-sm">What to store and calculate</td>
                <td className="px-6 py-4 text-sm">static / declarative</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">Actions</td>
                <td className="px-6 py-4 text-sm">What to do</td>
                <td className="px-6 py-4 text-sm">dynamic / imperative</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">Events</td>
                <td className="px-6 py-4 text-sm">When to do</td>
                <td className="px-6 py-4 text-sm">dynamic / imperative</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium">Constraints</td>
                <td className="px-6 py-4 text-sm">What can be done</td>
                <td className="px-6 py-4 text-sm">static / declarative</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-6">Stack</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="border-2 border-doc-blue rounded-lg p-6 text-center">
            <Code className="h-12 w-12 text-doc-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-doc-blue">Classes</h3>
          </div>
          <div className="border-2 border-doc-blue rounded-lg p-6 text-center">
            <Code className="h-12 w-12 text-doc-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-doc-blue">Aggregations</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainLogicContent;

import React, { useContext} from "react";
import ApplicationContext from "../../ApplicationContext";
import "./EmployeesPage.scss";
import Statistic from "../../components/Statistic/Statistic";
import CardWrapper from "../../components/CardWrapper/CardWrapper";

const EmployeesPage = () => {
  const { employees, setEmpUpdate, tasks, empUpdate } =
    useContext(ApplicationContext);

  const now = new Date().getTime();

  const tasksPastM = tasks?.filter(
    (task) => task?.doneDate > now - 1000 * 60 * 60 * 24 * 30
  );

  const res = Object.values(
    tasksPastM?.reduce((acc, doneTask) => {
      if (!acc[doneTask?.assignee]) {
        acc[doneTask?.assignee] = { name: doneTask?.assignee, occurrence: 0 };
      }
      acc[doneTask.assignee].occurrence++;
      return acc;
    }, [])
  )
    ?.sort((a, b) => {
      return b?.occurrence - a?.occurrence;
    })
    ?.slice(0, 5);

  const resultNames = res?.map((el) => el?.name);

console.log(res);

  return (
    <div className="main-page-wrapper">
      <div className="page-wrapper">
        <h2>All Employees</h2>
        <CardWrapper
          createPage={"/create-new-employee"}
          deleteURL={"https://640b1ad481d8a32198d9d28b.mockapi.io/Employee/"}
          refreshData={setEmpUpdate}
          setClass={"employeesCard"}
          surchArray={employees}
          searchKey={"fullName"}
          edit={"edit-employee"}
          path={"employee"}
          listClass={"no-checkbox"}
          searchTitle={"employees"}
          createBtn={"Create employee"}

        />
      </div>

      <Statistic
        page={"Employees"}
        name={"Top 5 Employees:"}
        statisticArray={resultNames}
      />
    </div>
  );
};

export default EmployeesPage;

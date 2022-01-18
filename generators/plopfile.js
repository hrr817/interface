module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name?",
      },
      {
        type: "list",
        name: "componentType",
        message: "atomic or molecular?",
        choices: ["atomic", "molecular"],
        filter(val) {
          return `__${val.toLowerCase()}s__`
        },
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/components/{{componentType}}/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{componentType}}/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{componentType}}/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{componentType}}/{{pascalCase name}}/index.test.tsx",
        templateFile: "templates/index.test.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("page", {
    description: "application page",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}Page/index.tsx",
        templateFile: "templates/page.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}Page/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}Page/index.test.tsx",
        templateFile: "templates/index.test.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("page component", {
    description: "application page component",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "page",
        message: "page name?",
      },

      {
        type: "input",
        name: "name",
        message: "component name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/pages/{{pascalCase page}}/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase page}}/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path:
          "../src/pages/{{pascalCase page}}/{{pascalCase name}}/index.test.tsx",
        templateFile: "templates/index.test.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("page component within a folder", {
    description: "application page component",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "folder",
        message: "folder name?",
      },
      {
        type: "input",
        name: "page",
        message: "page name?",
      },

      {
        type: "input",
        name: "name",
        message: "component name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/pages/{{camelCase folder}}/{{pascalCase page}}/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{camelCase folder}}/{{pascalCase page}}/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path:
          "../src/pages/{{camelCase folder}}/{{pascalCase page}}/{{pascalCase name}}/index.test.tsx",
        templateFile: "templates/index.test.tsx.hbs",
      },
    ],
  });

  plop.setGenerator("service API", {
    description: "application service API",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "service name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/services/api/{{camelCase name}}Api/index.ts",
        templateFile: "templates/serviceAPI.ts.hbs",
      },
      {
        type: "add",
        path: "../src/services/api/{{camelCase name}}Api/index.test.ts",
        templateFile: "templates/serviceAPI.ts.hbs",
      },
    ],
  });

  plop.setGenerator("Factory", {
    description: "application factory",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "factory name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/config/testUtils/factories/{{camelCase name}}Factory.ts",
        templateFile: "templates/factory.ts.hbs",
      },
    ],
  });
  plop.setGenerator("Context", {
    description: "application context",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "context name?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/contexts/{{camelCase name}}/index.tsx",
        templateFile: "templates/context.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/contexts/{{camelCase name}}/index.test.tsx",
        templateFile: "templates/context.test.tsx.hbs",
      },
    ],
  });
};
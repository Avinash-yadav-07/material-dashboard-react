import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell } from "recharts"; // For the stacked bar chart
import { ResponsiveContainer } from "recharts";
import { Tree, TreeNode } from "react-organizational-chart"; // For the tree-map visualization

const CostManagementDashboard = () => {
  // Example data for fixed vs. variable costs (replace with actual data)
  const costData = [
    { team: "Team A", fixed: 1000, variable: 500 },
    { team: "Team B", fixed: 800, variable: 700 },
    { team: "Team C", fixed: 1200, variable: 300 },
  ];

  // Example data for cost categories (replace with actual data)
  const treeData = [
    { name: "Rent", cost: 3000 },
    { name: "Software Licenses", cost: 1500 },
    { name: "Marketing", cost: 2500 },
    { name: "Travel", cost: 800 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cost Management Dashboard
      </Typography>

      {/* Stacked Bar Chart for Fixed vs. Variable Costs */}
      <Card>
        <Typography variant="h6" gutterBottom>
          Fixed vs. Variable Costs by Team
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={costData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="team" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="fixed" stackId="a" fill="#8884d8" />
            <Bar dataKey="variable" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Tree-map for Cost Category Distribution */}
      <Card>
        <Typography variant="h6" gutterBottom>
          Cost Category Distribution
        </Typography>
        <div style={{ height: 300, width: "100%" }}>
          <Tree label={<div>Cost Categories</div>}>
            {treeData.map((item, index) => (
              <TreeNode key={index} label={`${item.name}: $${item.cost}`} />
            ))}
          </Tree>
        </div>
      </Card>

      {/* Metrics */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <Typography variant="h6">Fixed Costs per Team</Typography>
            <ul>
              {costData.map((item, index) => (
                <li key={index}>
                  {item.team}: ${item.fixed}
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <Typography variant="h6">Variable Costs per Team</Typography>
            <ul>
              {costData.map((item, index) => (
                <li key={index}>
                  {item.team}: ${item.variable}
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CostManagementDashboard;

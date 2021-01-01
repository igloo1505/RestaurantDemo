const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    first: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true,
    }
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  payRate: {
    type: Number,
    required: true,
  }
}, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

EmployeeSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  EmployeeSchema.methods.checkPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

module.exports = mongoose.model("Employee", EmployeeSchema);

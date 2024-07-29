export default {
    install(app) {
        app.config.globalProperties.$notify = (status, message,toast) => {
            switch (status) {
                case "S":
                    toast.add({
                        severity: "success",
                        summary: "Thông báo thành công",
                        detail: message,
                        life: 3000,
                    });
                    break;
                case "I":
                    toast.add({ severity: "info", summary: "Thông báo", detail: message, life: 3000 });
                    break;
                case "W":
                    toast.add({ severity: "warning", summary: "Cảnh báo", detail: message, life: 3000 });
                    break;
                case "E":
                    toast.add({
                        severity: "error",
                        summary: "Thông báo lỗi",
                        detail: message,
                        life: 3000,
                    });
                    break;
                default:
                    console.error("Invalid status provided to Notification");
            }
        };
    }
};
